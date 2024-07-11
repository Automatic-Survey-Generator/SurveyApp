import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IForm } from '@/models/types';

export default function AdminPage({formResults}: {formResults: IForm[]}) {
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
          <TableRow key={form._id as string}>
            <TableCell>{form.form_title}</TableCell>
            <TableCell>{form.form_description}</TableCell>
            <TableCell>{new Date(form.created_at).toDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
