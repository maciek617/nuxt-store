<template>
  <div
    class="container mx-auto px-4 flex flex-col lg:flex-row lg:justify-between"
  >
    <div>
      <HomeHeader />
      <Button
        text="Explore more"
        extraClasses="mt-10 bg-black text-white hover:bg-gray-700"
      />
      <HomeStats />
    </div>
    <HomeImage />
  </div>
</template>
