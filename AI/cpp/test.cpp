#include <bits/stdc++.h>

using namespace std;

string Separate(int a, int b, int c, int d) {
    vector<int> v = {a, b, c, d};
    sort(v.begin(), v.end());
    if (v[0] + v[3] == v[1] + v[2])
        return "YES";
    if (v[0] + v[1] + v[2] == v[3])
        return "YES";
    return "NO";
}

int ConvertNumber(int N) {
    int n_temp = N;
    int max = N % 10;
    string n_str = "";
    while (n_temp > 0) {
        max = (max > n_temp % 10) ? max : n_temp % 10;
        n_str = char(n_temp % 10 + '0') + n_str;
        n_temp /= 10;
    }
    int ans = 0;
    for (int i = 0; i < n_str.size(); i++) {
        if (n_str[i] - '0' != max) {
            n_str[i] = char(max + '0');
            break;
        }
    }
    for (int i = 0; i < n_str.size(); i++) {
        ans *= 10;
        ans += n_str[i] - '0';
    }
    return ans;
}

vector<int> NextTime(int h, int m, int n) {
    int p = h * 60 + m + n;
    vector<int> v = {(p / 60) % 24, p % 60};
    return v;
}

string AlikeNumber(int N) {
    int k = N % 10;
    while (N > 0) {
        if (k != N % 10)
            return "NO";
        N /= 10;
    }
    return "YES";
}

int main(int argc, char const *argv[])
{
    // cout << ConvertNumber(4234) << endl;
    vector<int> v = NextTime(23, 59, 0);
    cout << "[" << v[0] << "," << v[1] << "]" << endl;
    return 0;
}

