export const GridBgDemo = () => {
  return (
    <div className="-z-10 absolute top-0 left-0 h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]">
      <div
        className="absolute inset-0 pointer-events-none dark:bg-black-100
      bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      />
    </div>
  );
};
