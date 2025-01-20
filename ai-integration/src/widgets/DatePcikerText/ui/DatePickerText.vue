<script setup>
	import { computed } from 'vue';
	import DatePicker from 'primevue/datepicker';
	import { humanDate } from '@/shared/lib/humanDate';
	import { SECONDS_PER_DAY_TIMESPAN } from '@/shared/lib/SecondsPerDayTimespan';

	const dates = defineModel();

	const ruCardinalRules = new Intl.PluralRules('ru-Ru');

	const pluralDay = (count) => {
		const select = ruCardinalRules.select(count);

		if (select === 'one') {
			return count + ' день';
		} else if (select === 'few') {
			return count + ' дня';
		} else if (select === 'many') {
			return count + ' дней';
		}
	};

	const text = computed(() => {
		if (dates.value === null) {
			return 'Select a date';
		}

		const [start, end] = dates.value;
		const humanDateStart = humanDate(start);

		if (start && !end) {
			const currentDate = new Date();

			if (humanDateStart === humanDate(currentDate)) {
				return 'База знаний за сегодня';
			}

			return 'База знаний за ' + humanDateStart;
		} else if (start && end) {
			if (start.getTime() === end.getTime()) {
				return 'База знаний за ' + humanDate(start);
			}

			const dateDiff = Math.abs(end.getTime() - start.getTime());
			const daysDiff = Math.ceil(dateDiff / SECONDS_PER_DAY_TIMESPAN) + 1;

			return `База знаний за ${pluralDay(daysDiff)}`;
		}
	});
</script>

<template>
	<div class="date-pciker-text">
		<label class="date-pciker-text__label">
			<span class="date-pciker-text__value">
				{{ text }}
			</span>
			<DatePicker
				class="date-pciker-text__picker"
				inputClass="date-pciker-text__input"
				v-model="dates"
				selectionMode="range"
				:manualInput="false"
				showButtonBar
			/>
		</label>
	</div>
</template>

<style lang="scss" scoped>
	.date-pciker-text {
		position: relative;
		cursor: pointer;
	}

	.date-pciker-text__label {
		cursor: pointer;

		&:has(.date-pciker-text__input[aria-expanded='true']) {
			pointer-events: none;
		}
	}

	.date-pciker-text__picker {
		position: absolute;
		inset: 0;
		visibility: hidden;
		opacity: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}
</style>
