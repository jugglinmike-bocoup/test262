import re

from find_comments import find_comments
from parse_yaml import parse_yaml

regionStartPattern = re.compile(r'\s*#\s*region\s+(\S+)\s*{')
regionEndPattern = re.compile(r'\s*}')

class Case:
    def __init__(self, file_name):
        self.attribs = dict(meta=None, regions=dict())

        with open(file_name) as handle:
            self.attribs = self._parse(handle.read())

    def _parse(self, source):
        case = dict(meta=None, regions=dict())
        region_name = None
        region_start = 0
        lines = source.split('\n')

        for comment in find_comments(source):
            meta = parse_yaml(comment['source'])
            if meta:
                case['meta'] = meta
                continue

            match = regionStartPattern.match(comment['source'])
            if match:
                region_name = match.group(1)
                region_start = comment['lineno']
                continue

            if region_name:
                match = regionEndPattern.match(comment['source'])
                if match:
                    case['regions'][region_name] = \
                        '\n'.join(lines[region_start:comment['lineno'] - 1])
                    region_name = None
                    region_start = 0

        return case
