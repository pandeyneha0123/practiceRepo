// Greatest Common Divisor of Strings
class Solution {
    public String gcdOfStrings(String st1, String st2) {
        if (!(st1 + st2).equals(st2 + st1)) {
            return "";
        }

        int g = g(st1.length(), st2.length());
        return st2.substring(0, g);
    }

    public int g(int a, int b) {
        return (b == 0)? a : g(b, a % b);
    }
}

