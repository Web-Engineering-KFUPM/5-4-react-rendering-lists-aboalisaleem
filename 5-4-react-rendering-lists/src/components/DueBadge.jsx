function daysUntil(dateStr) {
  const today = new Date();
  const due = new Date(dateStr + "T00:00:00");
  today.setHours(0, 0, 0, 0);
  due.setHours(0, 0, 0, 0);
  const diff = Math.round((due - today) / (1000 * 60 * 60 * 24));
  return diff;
}


export default function DueBadge({ dueDate }) {
  // 🟩 PART C (Anchor):
  // 1) Call daysUntil(dueDate) → const d = ...
  const d = daysUntil(dueDate);
  console.log(dueDate);
  // console.log(dueDate);
  // 2) Use a ternary chain to set the label:
  let label;
  if (d < 0) {
    label = "Overdue";
  } else if (d === 0) {
    label = "Due today";
  } else if (d === 1) {
    label = "1 day remaining";
  } else {
    label = `${d} days remaining`;
  }
  // d < 0 → "Overdue"
  // d === 0 → "Due today"
  // d === 1 → "1 day remaining"
  // else → `${d} days remaining`
  // 3) Return <span className="badge"> with extra class:
  // "danger" if overdue, "warn" if due today

  let className;
  if (d < 0) {
    className = "danger";
  } else if (d === 0) {
    className = "warn";
  } 


  return <span className="badge">Label here</span>;
}