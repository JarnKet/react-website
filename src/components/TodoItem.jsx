// ໄຟລ໌: src/components/TodoItem.jsx

// ເຮົາຮັບ props ມາ 3 ຢ່າງ:
// 1. 'todo': ຂໍ້ມູນ ( { id, text, completed } )
// 2. 'onToggle': ຟັງຊັນທີ່ຈະເອີ້ນເມື່ອຕິກ checkbox
// 3. 'onDelete': ຟັງຊັນທີ່ຈະເອີ້ນເມື່ອກົດລົບ
function TodoItem({ todo, onToggle, onDelete }) {
  return (
    // ໃຊ້ 'completed' state ເພື່ອປ່ຽນ class
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)} // ເອີ້ນຟັງຊັນທີ່ແມ່ສົ່ງມາ
      />
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>ລົບ</button>
    </li>
  );
}

export default TodoItem;
