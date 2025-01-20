import { computed } from "vue";
import { useHistoryStore } from "@/entities/history";
import * as toast from '@/shared/lib/toast.js';

const history = useHistoryStore();

export const deleteStory = async (id) => history.deleteStoryById(id).then((success) => {
  if (success) {
    toast.info('Успешно', 'История удалена');
  }
});
export const deleteSelectedStories = async () => history.deleteSelectedStories().then((success) => {
  if (success) {
    toast.info('Успешно', 'Выбранные истории удалены');
  }
});
export const deleteAllStories = async () => history.deleteAllStories().then((success) => {
  if (success) {
    toast.info('Успешно', 'Все истории удалены');
  }
});

export const selectedStoriesLength = computed(() => history.selectedStories.length);
