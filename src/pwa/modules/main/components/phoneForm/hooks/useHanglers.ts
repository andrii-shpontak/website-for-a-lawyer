export function useHandlers() {
  const handleSubmit = async (data: any) => {
    console.log(data);
  };

  return { handleSubmit };
}
