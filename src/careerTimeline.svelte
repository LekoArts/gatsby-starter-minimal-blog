<script>
	import { Timeline, TimelineItem } from 'flowbite-svelte';
	import SchoolSvg from '../assets/school.svg';
	import MechatronicsSvg from '../assets/mechatronics.svg';
	import DiplomaSvg from '../assets/diploma.svg';
	import UniversitySvg from '../assets/university.svg';
</script>

<Timeline order="vertical">
	<TimelineItem title="Middle School Graduation" date="July 31st, 2018">
		<svelte:fragment slot="icon">
			<span
				class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
			>
				<img src={SchoolSvg} alt="" />
			</span>
		</svelte:fragment>
		<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
			On July 31st, 2018, I successfully completed my middle school education in a STEM-focused
			program at a secondary school.
		</p>
	</TimelineItem>
	<TimelineItem title="Mechatronics Engineering Training" date="September 1st, 2018">
		<svelte:fragment slot="icon">
			<span
				class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
			>
				<img src={MechatronicsSvg} alt="" />
			</span>
		</svelte:fragment>
		<p class="text-base font-normal text-gray-500 dark:text-gray-400">
			I embarked on my journey to become a mechatronics engineer on September 1st, 2018, by starting
			my training at the Robert Bosch GmbH in Bamberg, Germany.
		</p>
	</TimelineItem>
	<TimelineItem title=" Completion of Training and High School Diploma" date="July 31st, 2021">
		<svelte:fragment slot="icon">
			<span
				class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
			>
				<img src={DiplomaSvg} alt="" />
			</span>
		</svelte:fragment>
		<p class="text-base font-normal text-gray-500 dark:text-gray-400">
			On July 31st, I reached a significant milestone by concluding my mechatronics engineering
			training and earning my high school diploma.
		</p>
	</TimelineItem>
	<TimelineItem title="Pursuing Computer Science Degree" date="October 1st, 2021">
		<svelte:fragment slot="icon">
			<span
				class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
			>
				<img src={UniversitySvg} alt="" />
			</span>
		</svelte:fragment>
		<p class="text-base font-normal text-gray-500 dark:text-gray-400">
			I took a step further towards my career goals on October 1st, 2021, by enrolling in a dual
			study program at Deutsche Telekom AG to obtain my bachelor's degree in computer science.
		</p>
	</TimelineItem>
</Timeline>
