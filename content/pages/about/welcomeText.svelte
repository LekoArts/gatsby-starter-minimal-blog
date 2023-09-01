<script lang="ts">
  import { Heading, Img, Span } from 'flowbite-svelte';
  import SocialBoxes from './socialBoxes.svelte';

</script>

<div class="text-teal-600 dark:text-emerald-200 welcomeText">
    <Heading tag="h1">Hi, i am <Span gradient>Lukas Klein </Span><Span><Img src="/hand-Waving.png" alt="sample 1" class="wavingImg"/></Span></Heading>
    <Heading tag="h4">dual student of computer science</Heading>
    <div class="socials">
    <SocialBoxes/>
</div>
</div>
