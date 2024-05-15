import java.util.*;

class Solution {
    public int maximumSafenessFactor(List<List<Integer>> grid) {
        int n = grid.size();
        if (grid.get(0).get(0) == 1 || grid.get(n - 1).get(n - 1) == 1) {
            return 0; // If start or end are thieves, safeness is 0.
        }
        Deque<int[]> q = new ArrayDeque<>();
        int[][] dist = new int[n][n];
        Arrays.stream(dist).forEach(a -> Arrays.fill(a, Integer.MAX_VALUE));
        // Multi-source BFS from every thief to calculate minimum distance to any thief.
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                if (grid.get(i).get(j) == 1) {
                    dist[i][j] = 0;
                    q.offer(new int[]{i, j});
                }
            }
        }

        int[] dirs = {-1, 0, 1, 0, -1};
        while (!q.isEmpty()) {
            int[] p = q.poll();
            for (int k = 0; k < 4; ++k) {
                int x = p[0] + dirs[k], y = p[1] + dirs[k + 1];
                if (x >= 0 && x < n && y >= 0 && y < n && dist[x][y] == Integer.MAX_VALUE) {
                    dist[x][y] = dist[p[0]][p[1]] + 1;
                    q.offer(new int[]{x, y});
                }
            }
        }

        List<int[]> t = new ArrayList<>();
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                t.add(new int[]{dist[i][j], i, j});
            }
        }

        t.sort((a, b) -> Integer.compare(b[0], a[0]));
        UnionFind uf = new UnionFind(n * n);

        // Attempt to connect paths starting from the highest distance (safest area).
        for (int[] p : t) {
            int d = p[0], i = p[1], j = p[2];
            for (int k = 0; k < 4; ++k) {
                int x = i + dirs[k], y = j + dirs[k + 1];
                if (x >= 0 && x < n && y >= 0 && y < n && dist[x][y] >= d) {
                    uf.union(i * n + j, x * n + y);
                }
            }
            if (uf.find(0) == uf.find(n * n - 1)) {
                return d; // If start and end are connected in the UF, return the current distance.
            }
        }
        return 0;
    }
}

class UnionFind {
    private int[] parent;

    public UnionFind(int n) {
        parent = new int[n];
        for (int i = 0; i < n; ++i) {
            parent[i] = i;
        }
    }

    public int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    public void union(int a, int b) {
        int rootA = find(a);
        int rootB = find(b);
        if (rootA != rootB) {
            parent[rootA] = rootB;
        }
    }
}
