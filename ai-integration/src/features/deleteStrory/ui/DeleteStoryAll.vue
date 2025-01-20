<script setup>
	import Button from 'primevue/button';
	import { useConfirm } from 'primevue/useconfirm';
	import { confirmData } from '../staticData/confirmData';
	import * as toast from '@/shared/lib/toast';
	const confirm = useConfirm();

	const deleteAll = (event) => {
		confirm.require({
			target: event.currentTarget,
			message: 'Вы уверены, что хотите удалить все истории?',
			accept: () => {
				toast.info('Успешно', 'Все истории удалены');
			},
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
