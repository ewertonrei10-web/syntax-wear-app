export const SubscriptionForm = () => {
  return (
    <form className="flex flex-col">
      <label htmlFor="newletter">Inscreva-se em nosso e-mail</label>
      <input
        type="e-mail"
        id="newletter"
        name="newletter"
        placeholder="email@email.com"
        className="rounded-[30px] bg-white py-3 px-5 placeholder-gray-400"
      />
    </form>
  );
};
