function isFilterCustomType(
  selectedCustomType: string,
  type_filter_label: string,
  type_filter_reset: string,
): boolean {
  return (
    selectedCustomType === type_filter_label ||
    selectedCustomType === type_filter_reset
  );
}

export default isFilterCustomType;
