function solution(A) {
    A.sort((a, b) => a - b);

    let longestSpike = 1;
    let currentSpike = 1;

    for (let i = 1; i < A.length; i++) {
        if (A[i] > A[i - 1]) {
            currentSpike++;
            longestSpike = Math.max(longestSpike, currentSpike);
        } else {
            currentSpike = 1;
        }
    }

    return longestSpike;
}