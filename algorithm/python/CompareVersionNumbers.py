class Solution:
    def compareVersion(self, version1, version2):
        len1, len2 = len(version1), len(version2)
        index1, index2 = 0, 0

        while index1 < len1 or index2 < len2:
            value1 = 0
            while index1 < len1 and version1[index1] != '.':
                value1 = value1 * 10 + ord(version1[index1]) - ord('0')
                index1 += 1
            index1 += 1

            value2 = 0
            while index2 < len2 and version2[index2] != '.':
                value2 = value2 * 10 + ord(version2[index2]) - ord('0')
                index2 += 1
            index2 += 1
            if value1 > value2:
                return 1
            elif value1 < value2:
                return -1
        
        return 0
