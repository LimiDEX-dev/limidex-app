export const routerAbi: string[] = [
  "function getUserBalances(address user, address[] calldata tokens) external view returns (uint256[] memory balances)",
  "function wrap() external payable",
  "function unwrap(uint256 volume) external",
  "function getOrderHistoryPagesCount(address trader) external view returns (uint256)",
  "function getOrderHistoryPage(uint256 page, address trader) external view returns (uint256[] memory, uint256[] memory, uint256[] memory, address[] memory, address[] memory)",
];
