var checkRecord = function(n) {
    const MOD = 1000000007;
    
    if (n === 1) return 3;

    let P0 = 1, L0 = 1, LL0 = 0, P1 = 1, L1 = 0, LL1 = 0;

    for (let i = 2; i <= n; i++) {
        let newP0 = (P0 + L0 + LL0) % MOD;
        let newP1 = (P1 + L1 + LL1 + P0 + L0 + LL0) % MOD;
        let newL0 = P0 % MOD;
        let newL1 = P1 % MOD;
        let newLL0 = L0 % MOD;
        let newLL1 = L1 % MOD;

        P0 = newP0;
        P1 = newP1;
        L0 = newL0;
        L1 = newL1;
        LL0 = newLL0;
        LL1 = newLL1;
    }

    return (P0 + P1 + L0 + L1 + LL0 + LL1) % MOD;
};
