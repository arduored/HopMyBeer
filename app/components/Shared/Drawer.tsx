import { PropsWithChildren, useState } from "react";
import { create } from "zustand";

interface DrawerProps extends PropsWithChildren {
  origin: "top" | "right" | "bottom" | "left";
}

export default function Drawer({ origin, children }: DrawerProps) {
  const { isOpen, close } = useDrawer();

  const handleBackDropClick = () => {
    close();
  };

  return (
    <div
      className={`backdrop backdrop-${isOpen ? "on" : "off"}`}
      onClick={handleBackDropClick}
    >
      <div className={`drawer drawer-${isOpen ? "open" : "close"}`}>
        {children}
      </div>
    </div>
  );
}

interface DrawerState {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

export const useDrawer = create<DrawerState>((set) => ({
  isOpen: false,
  toggle: () => set((state: DrawerState) => ({ isOpen: !state.isOpen })),
  close: () => set(() => ({ isOpen: false })),
}));
