import re, os

from case import Case
from template import Template

hashesFilenamePattern = re.compile(r'^[^\.].*\.hashes$')

class Expander:
    def __init__(self, case_dir):
        self.templates = dict()
        self.case_dir = case_dir


    def _load_templates(self, template_class):
        directory = os.path.join(self.case_dir, template_class)
        file_names = map(
            lambda x: os.path.join(directory, x),
            filter(self.is_template_file, os.listdir(directory))
        )

        self.templates[template_class] = [Template(x) for x in file_names]

    def _get_templates(self, template_class):
        if not template_class in self.templates:
            self._load_templates(template_class)

        return self.templates[template_class]

    def is_template_file(self, filename):
      return re.match(hashesFilenamePattern, filename)

    def list_cases(self):
        for name in os.listdir(self.case_dir):
            full = os.path.join(self.case_dir, name)
            if os.path.isfile(full) and hashesFilenamePattern.match(name):
                yield full

    def expand(self, case_file = None):
        caseValues = None
        group = None

        if case_file:
            return [self.expand_case(case_file)]

        return [self.expand_case(x) for x in self.list_cases()]

    def expand_case(self, file_name):
        case = Case(file_name)

        template_class = case.attribs['meta']['template']
        templates = self.templates.get(template_class)

        for template in self._get_templates(template_class):
            yield template.expand(file_name, case.attribs)
