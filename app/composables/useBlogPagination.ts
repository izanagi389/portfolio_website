import { BLOG_LIMIT, BLOG_OFFSET } from '~/constants';
import type { BlogContents } from '~/types';

export const useBlogPagination = () => {
  const contents = ref<any[]>([]);
  const totalCount = ref(0);
  const offset = ref(BLOG_OFFSET);
  const limit = ref(BLOG_LIMIT);
  const more_btn_show = ref(true);
  const loading = ref(false);
  const contents_show = ref(true);

  const toggleComponent = () => {
    contents_show.value = false;
    nextTick(() => {
      contents_show.value = true;
    });
  };

  const moreContents = async (filters?: string) => {
    loading.value = true;
    toggleComponent();

    const params = new URLSearchParams({
      offset: offset.value.toString(),
      limit: limit.value.toString()
    });
    
    if (filters) {
      params.append('filters', filters);
    }

    const newData = await useAsyncData<BlogContents>("contents", () =>
      $fetch(`/api/microcms?${params.toString()}`)
    );

    contents.value = contents.value.concat(newData.data.value?.contents || []);
    loading.value = false;
    toggleComponent();

    if (totalCount.value > offset.value) {
      offset.value += BLOG_OFFSET;
    }
    if (totalCount.value < offset.value) {
      more_btn_show.value = false;
    }
  };

  const initializeData = async (data: BlogContents, filters?: string) => {
    contents.value = data.contents || [];
    totalCount.value = data.totalCount || 0;
    more_btn_show.value = totalCount.value > limit.value;
  };

  return {
    contents: readonly(contents),
    totalCount: readonly(totalCount),
    more_btn_show: readonly(more_btn_show),
    loading: readonly(loading),
    contents_show: readonly(contents_show),
    moreContents,
    initializeData
  };
}; 