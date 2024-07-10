import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Question = {
  _id: String,
  type: String,
  questionText: String,
  options: String,
  required: Boolean
}

type Form = {
  _id: String,
  title: String,
  description: String,
  questions: Question[],
  createdAt: Date,
}

export default function AdminPage({formResults}: {formResults: Form[]}) {
  return (
    <Table>
      <TableCaption>List of Form Results</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Created At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {formResults.map((form) => (
          <TableRow key={form._id}>
            <TableCell>{form.title}</TableCell>
            <TableCell>{form.description}</TableCell>
            <TableCell>{form.createdAt.toDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
