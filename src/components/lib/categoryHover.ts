
// 카테고리 선택바 hover event
export function CategoriesEvent() {

  if (typeof document !== 'undefined') {
    const categories = document.querySelector<HTMLElement>('.category-wrapper');

    categories?.addEventListener('click', (e) => {
      const selected = e.target as HTMLInputElement;
      select(categories, selected);
    });
  }

  const select = (ulEl: HTMLElement, liEl: HTMLElement) => {
    if(!liEl.children[0]){
      Array.from(ulEl.children).forEach((v) => v.classList.remove('selected'));
      if (liEl) liEl.classList.add('selected');
    }

  };
}
