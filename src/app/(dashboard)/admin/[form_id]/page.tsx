import AdminPanel from '@/components/AdminPanel'
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"


export default function AdminPage() {
  return <AdminPanel />
}

// export default function AdminPage() {
//   return (
//     <Table>
//       <TableCaption>List of Form Results</TableCaption>
//       <TableHeader>
//         <TableRow>
//           <TableHead>Title</TableHead>
//           <TableHead>Description</TableHead>
//           <TableHead>Created At</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {formResults.map((form) => (
//           <TableRow key={form._id}>
//             <TableCell>{form.title}</TableCell>
//             <TableCell>{form.description}</TableCell>
//             <TableCell>{new Date(form.createdAt).toLocaleDateString()}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// }
