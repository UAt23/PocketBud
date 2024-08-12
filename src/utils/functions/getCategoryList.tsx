import {fetchCategories, fetchGroups} from '../SupabaseClient';

function groupCategories(categories: any) {
  return categories.reduce((acc: any, item: any) => {
    const {group_id} = item;

    if (!acc[group_id]) {
      acc[group_id] = [];
    }

    acc[group_id].push(item);
    return acc;
  }, {});
}

export async function getCategoryList() {
  const categories = await fetchCategories();
  const groups = await fetchGroups();

  const groupedByGroupId = groupCategories(categories);

  const result: any[] = [];

  groups.forEach(group => {
    const matchedItems = groupedByGroupId[group.id];
    if (matchedItems) {
      matchedItems.forEach(item => {
        result.push({
          ...item,
          group_name: group.name,
          group_current_budget: group.total_balance,
          group_allowance: group.total_balance, // Assuming allowance is the same as total_balance for now
        });
      });
    }
  });

  const output = groupCategories(result);
  return output;
};
