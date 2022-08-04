export const poolAbi: string[] = [
  "function calculateAmount(uint256 lpAmount) external view returns (uint256 amount)",
  "function calculateLP(uint256 amount) external view returns (uint256 lpAmount)",
  "function deposit(uint256 amount) external",
  "function depositETH() external payable",
  "function withdraw(uint256 lpAmount) external",
  "function withdrawETH(uint256 lpAmount) external",
  "function reserve() external view returns (uint256)",
  "function totalEarned() external view returns (uint256)",
  "function totalEarnedByStaking() external view returns (uint256)",
  "function totalSupply() external view returns (uint256)",
  "function poolToken() external view returns (address)",
];
