---
title: 백준 2580 스도쿠 c++
date: 2021-12-24
category: dev
tag: 백준
---

[https://www.acmicpc.net/problem/2580](https://www.acmicpc.net/problem/2580)


처음 풀이 : 레퍼런스로 넘기고 set 사용 때문에 시간 초과 난 것 같다.

``` cpp
// 스도쿠 시간초과;
#include <iostream>
#include <vector>
#include <set>

using namespace std;

vector<vector<int> > board(9, vector<int>(9, 0));
vector<pair<int, int> > empty_xy;

// 0 1 2  3 4 5  6 7 8
void eraseInvalidNum(int x, int y, set<int>& s) {
	int start_x = x / 3 * 3, start_y = y / 3 * 3;
	// 3 x 3 박스
	for (int i = 0; i < 3; i++) {
		for (int j = 0; j < 3; j++) {
			int n = board[start_x + i][start_y + j];
			if (s.find(n) != s.end())
				s.erase(n);
		}
	}
	// 가로
	for (int i = 0; i < 9; i++) {
		if (s.find(board[i][y]) != s.end())
			s.erase(board[i][y]);
	}
	// 세로
	for (int i = 0; i < 9; i++) {
		if (s.find(board[x][i]) != s.end())
			s.erase(board[x][i]);
	}
}

bool recur(int depth) {
	if (depth == empty_xy.size()) {
		return true;
	}
	set<int> s({1, 2, 3, 4, 5, 6, 7, 8, 9});
	eraseInvalidNum(empty_xy[depth].first, empty_xy[depth].second, s);
	if (s.empty()) // 돌아가야함
		return false;
	for (auto n : s) {
		vector<vector<int> > backup = board;
		board[empty_xy[depth].first][empty_xy[depth].second] = n;
		if (recur(depth + 1)) // 해결!
			return true;
		board = backup;
	}
	return false; // 돌아가야함
}


int main () {
	ios_base::sync_with_stdio(0);cin.tie(0);cout.tie(0);
	for (int i = 0; i < 9; i++) {
		for (int j = 0; j < 9; j++) {
			cin >> board[i][j];
			if (board[i][j] == 0)
				empty_xy.push_back(make_pair(i, j));
		}
	}
	recur(0);
	for (int i = 0; i < 9; i++) {
		for (int j = 0; j < 9; j++)
			cout << board[i][j] << ' ';
		cout << '\n';
	}
}
```


set 순회, board backup 필요 없이 많이 하는 부분 고쳐서 통과했다.

``` c++
// 스도쿠
#include <iostream>
#include <vector>

using namespace std;

vector<vector<int> > board(9, vector<int>(9, 0));
vector<pair<int, int> > empty_xy;

// 0 1 2  3 4 5  6 7 8
void eraseInvalidNum(int x, int y, vector<bool>& bv) {
	int start_x = x / 3 * 3, start_y = y / 3 * 3;
	// 3 x 3 박스
	for (int i = 0; i < 3; i++) {
		for (int j = 0; j < 3; j++) {
			int n = board[start_x + i][start_y + j];
			bv[n] = false;
		}
	}
	// 가로
	for (int i = 0; i < 9; i++) {
		bv[board[i][y]] = false;
	}
	// 세로
	for (int i = 0; i < 9; i++) {
		bv[board[x][i]] = false;
	}
}

bool recur(int depth) {
	if (depth == empty_xy.size()) {
		return true;
	}
	vector<bool> bv(10, true);
	eraseInvalidNum(empty_xy[depth].first, empty_xy[depth].second, bv);
	for (int i = 1; i < 10; i++) {
		if (bv[i] == false)
			continue;
		board[empty_xy[depth].first][empty_xy[depth].second] = i;
		if (recur(depth + 1)) // 해결!
			return true;
		board[empty_xy[depth].first][empty_xy[depth].second] = 0;
	}
	return false; // 돌아가야함
}

int main () {
	ios_base::sync_with_stdio(0);cin.tie(0);cout.tie(0);
	for (int i = 0; i < 9; i++) {
		for (int j = 0; j < 9; j++) {
			cin >> board[i][j];
			if (board[i][j] == 0)
				empty_xy.push_back(make_pair(i, j));
		}
	}
	recur(0);
	for (int i = 0; i < 9; i++) {
		for (int j = 0; j < 9; j++)
			cout << board[i][j] << ' ';
		cout << '\n';
	}
}
```

컨테이너 없이 int n 순회하면서 유효한지 검증하는 더 좋은 방법.

```c++
#include <iostream>
#include <vector>
#include <set>

using namespace std;

vector<vector<int> > board(9, vector<int>(9, 0));
vector<pair<int, int> > empty_xy;

bool check(int x, int y, int n) {
	for (int i = 0; i < 9; i++) {
		if (board[x][i] == n)
			return false;
		if (board[i][y] == n)
			return false;
	}

	int start_x = x / 3 * 3, start_y = y / 3 * 3;
	for (int i = 0; i < 3; i++) {
		for (int j = 0; j < 3; j++) {
			if (board[start_x + i][start_y + j] == n)
				return false;
		}
	}
	return true;
}

bool recur(int depth) {
	if (depth == empty_xy.size()) return true;

	for (int n = 1; n <= 9; n++) {
		int x = empty_xy[depth].first;
		int y = empty_xy[depth].second;
		if (check(x, y, n)) {
			board[x][y] = n;
			if (recur(depth + 1))
				return true;
			board[x][y] = 0;
		}
	}
	return false;
}

int main () {
	ios_base::sync_with_stdio(0);cin.tie(0);cout.tie(0);
	for (int i = 0; i < 9; i++) {
		for (int j = 0; j < 9; j++) {
			cin >> board[i][j];
			if (board[i][j] == 0)
				empty_xy.push_back(make_pair(i, j));
		}
	}
	recur(0);
	for (int i = 0; i < 9; i++) {
		for (int j = 0; j < 9; j++)
			cout << board[i][j] << ' ';
		cout << '\n';
	}
}
```
