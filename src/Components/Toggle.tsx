import { Switch } from "@headlessui/react";

interface Props {
  state: boolean;
  setState: (state: boolean) => void;
  children: React.ReactNode;
}

export default function Toggle(props: Props) {
  const { state, setState, children } = props;

  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label className="ml-4 mr-1 text-gray-400">
          {children}
        </Switch.Label>
        <Switch
          checked={state}
          onChange={setState}
          className={`${
            state ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex items-center h-6 rounded-full w-11`}
        >
          <span className="sr-only">{children}</span>
          <span
            className={`${
              state ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-white rounded-full`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}
