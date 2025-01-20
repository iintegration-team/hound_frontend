<script setup>
	import { selectedStoriesLength } from '../model';
	import { useConfirm } from 'primevue/useconfirm';
	import Button from 'primevue/button';
	import { deleteSelectedStories } from '../model';
	import { confirmData } from '../staticData/confirmData';

	const confirm = useConfirm();
	const deleteSelected = (event) => {
		confirm.require({
			target: event.currentTarget,
			message: 'Вы уверены, что хотите удалить выбранные истории?',
			accept: () => deleteSelectedStories(),
			...confirmData,
		});
	};
</script>
<template>
	<Button
		@click="deleteSelected"
		label="удалить"
		:badge="(selectedStoriesLength || '').toString()"
		:disabled="selectedStoriesLength === 0"
		class="delete-selected"
		badgeClass="delete-selected__badge"
		severity="danger"
	/>
</template>

<style lang="scss">
	.delete-selected {
		transition: opacity 0.2s;
	}

	.delete-selected__badge {
		order: -1;
		text-align: center;
	}
</style>
