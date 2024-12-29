"use client";
import RecoilContext from "@/recoil";
import { ReactNode } from "react";
import { RecoilSync } from "recoil-sync";

export const Recoil = ({
  children,
  ids,
  ...props
}: {
  children: ReactNode;
  ids: string[];
  [key: string]: unknown;
}) => {
  return (
    <RecoilContext>
      <RecoilSync
        storeKey="init-from-props"
        read={(itemKey) => {
          if (itemKey === "props-ids") {
            return ids;
          }

          return props[itemKey];
        }}
      >
        {children}
      </RecoilSync>
    </RecoilContext>
  );
};
