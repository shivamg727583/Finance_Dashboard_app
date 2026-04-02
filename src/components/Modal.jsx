const Modal = ({ open, onClose, onSave, form, setForm }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-[90%] max-w-sm p-6">

        <h2 className="text-lg font-semibold mb-4">
          Edit Transaction
        </h2>

        <input
          className="w-full p-2 mb-3 rounded-lg border dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none"
          value={form.category || ""}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
          placeholder="Category"
        />

        <input
          type="number"
          className="w-full p-2 mb-4 rounded-lg border dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none"
          value={form.amount || ""}
          onChange={(e) =>
            setForm({ ...form, amount: +e.target.value })
          }
          placeholder="Amount"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Cancel
          </button>

          <button
            onClick={onSave}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
};

export default Modal;