import React from "react";
import { ProvideAuth } from "./useAuth";
import { ProvideTask } from "./useTask";
import { ProvideTimer } from "./useTimer";
import { ProvideTodo } from "./useTodo";
import { ProvideUser } from "./useUser";
import { ProviderTheme } from "./useTheme";

type ProvideProps = {
  children: React.ReactNode;
};

export const ProvideRoot = ({ children }: ProvideProps) => {
  return (
    <ProvideAuth>
      <ProvideTask>
        <ProvideTimer>
          <ProvideTodo>
            <ProvideUser>
              <ProviderTheme>{children}</ProviderTheme>
            </ProvideUser>
          </ProvideTodo>
        </ProvideTimer>
      </ProvideTask>
    </ProvideAuth>
  );
};

export * from "./useAuth";
export * from "./useTask";
export * from "./useTimer";
export * from "./useTodo";
export * from "./useUser";
export * from "./useTheme";
