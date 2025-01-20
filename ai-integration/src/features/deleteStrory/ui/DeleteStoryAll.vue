<script setup>
	import Button from 'primevue/button';
	import { useConfirm } from 'primevue/useconfirm';
	import { confirmData } from '../staticData/confirmData';
	import { deleteAllStories } from '../model';

	const confirm = useConfirm();

	const deleteAll = (event) => {
		confirm.require({
			target: event.currentTarget,
			message: 'Вы уверены, что хотите удалить все истории?',
			accept: () => deleteAllStories(),
			...confirmData,
		});
	};
</script>
<template>
	<Button
		@click="deleteAll"
		label="Очистить"
		icon="pi pi-trash"
		severity="danger"
	/>
</template>

<style lang="scss" scoped></style>
