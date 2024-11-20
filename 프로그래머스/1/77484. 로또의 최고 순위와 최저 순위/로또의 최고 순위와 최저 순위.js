function solution(lottos, win_nums) {
    let rankings = [];
    
    let union = lottos.filter(lotto => win_nums.includes(lotto)).length;
    let zeros = lottos.filter(lotto => lotto === 0).length;
    
    rankings[0] = union + zeros >= 2? 7 - (union + zeros) : 6;
    rankings[1] = union >= 2 ? 7 - union : 6;
    
    return rankings;
}