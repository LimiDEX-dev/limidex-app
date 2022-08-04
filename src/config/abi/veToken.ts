export const veTokenAbi: string[] = [
  "function deposit(uint256 amount, uint256 lockTimestampID, address token) external",
  "function withdraw(uint256 tokenId) external",
  "function viewAllocation(uint256 tokenId) external view returns (uint256, uint256, uint256, address)",
  "function isAllocationExpired(uint256 tokenId) external view returns (bool)",
  "function totalShare() external view returns (uint256)",
  "function latestTokenId() external view returns (uint256)",
  "function viewAllocations(address user, uint256 startID, uint256 len) external view returns (uint256[] memory out)",
];
