import {Product} from '../../../@types';

export async function orderItemsBySection(
  inComingItems: Product[],
  sections: string[],
): Promise<{}> {
  const orderedSections: Array<{
    name: string;
    data: Array<Product>;
  }> = [];

  const arqiu = sections.map(item => {
    const itemsFromSection = inComingItems.filter(
      currentItem => currentItem.section === item,
    );
    if (itemsFromSection) {
      orderedSections.push({name: item, data: itemsFromSection});
    }
  });

  /* const convertedItems = inComingItems.reduce((acc, obj) => {
      return {
        ...acc,

        sections[i]:

        [obj.item.product.id]: {
          ...obj,
          item: {...obj.item, showQuantity},
        },
      };
    }, {}); */

  return orderedSections;
}
