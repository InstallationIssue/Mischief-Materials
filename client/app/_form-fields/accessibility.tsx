export interface IAppState {
  message: string;
}

export default function Accessibility({ state }: { state: IAppState }) {
  return (
    <p aria-live="polite" className="sr-only" role="status">
      {state?.message}
    </p>
  );
}
