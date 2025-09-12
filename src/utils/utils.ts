export const makeNavClass =
    (activeClass: string) =>
        ({ isActive }: { isActive: boolean }) =>
            isActive ? activeClass : undefined;