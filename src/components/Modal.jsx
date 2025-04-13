const Modal = ({ message, onConfirm, onCancel }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow">
        <p>{message}</p>
        <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={onConfirm}>Yes</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onCancel}>No</button>
      </div>
    </div>
  );
  
  export default Modal;

  