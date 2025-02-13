import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

//*                                 PAGES
const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));
const News = lazy(() => import('../pages/News'));
const Admin = lazy(() => import('../pages/Admin'));
// const Workspace = lazy(() => import('../pages/workspace/Workspace'));
// const Statistics = lazy(() => import('../pages/statistics/Statistics'));
const Chat = lazy(() => import('../pages/Chat'));

//*                             SECTIONS
const CreateReport = lazy(() => import('../pages/workspace/CreateReport'));
const Marks = lazy(() => import('../pages/workspace/Marks'));
const ReportManagement = lazy(() => import('../pages/workspace/ReportManagement'));
const EditingConsultations = lazy(() => import('../pages/workspace/EditingConsultations'));
const DataManagement = lazy(() => import('../pages/workspace/DataManagement'));

const DetailedSearch = lazy(() => import('../pages/statistics/DetailedSearch'));
const MedicationReports = lazy(() => import('../pages/workspace/MedicationReports'));
const Medicines = lazy(() => import('../pages/workspace/Medicines'));
const PharmaceuticalAccounting = lazy(() => import('../pages/workspace/PharmaceuticalAccounting'));
const SummaryInformation = lazy(() => import('../pages/statistics/SummaryInformation'));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route path="news" element={<News />} />
          <Route path="admin" element={<Admin />} />
          <Route path="create-report" element={<CreateReport />} />
          <Route path="report-management" element={<ReportManagement />} />
          <Route path="editing-consultations" element={<EditingConsultations />} />
          <Route path="marks" element={<Marks />} />
          <Route path="data-management" element={<DataManagement />} />
          <Route path="medicines" element={<Medicines />} />
          <Route path="medication-reports" element={<MedicationReports />} />
          <Route path="pharmaceutical-accounting" element={<PharmaceuticalAccounting />} />

          <Route path="summary-information" element={<SummaryInformation />} />
          <Route path="search" element={<DetailedSearch />} />

          <Route path="chat" element={<Chat />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

// import { Login } from '../pages/Login';
// import { Home } from '../pages/Home';
// import { News } from '../pages/News';
// import { Admin } from '../pages/Admin';
// import { Workspace } from '../pages/workspace/Workspace';
// import { Statistics } from '../pages/statistics/statistics';
// import { Chat } from '../pages/Chat';

// //*                             SECTIONS
// import { CreateReport } from '../pages/workspace/CreateReport';
// import { Marks } from '../pages/workspace/Marks';
// import { ReportManagement } from '../pages/workspace/ReportManagement';
// import { DocumentManagement } from '../pages/workspace/DocumentManagement';
// import { DataManagement } from '../pages/workspace/DataManagement';

// import { DetailedSearch } from '../pages/statistics/detailed-search';
// import { MedicationReports } from '../pages/statistics/medication-reports';
// import { MedicationStatistics } from '../pages/statistics/medication-statistics';
// import { PharmaceuticalAccounting } from '../pages/statistics/pharmaceutical-accounting';
// import { SummaryInformation } from '../pages/statistics/summary-information';

//*                            TYPE REPORTS
// import { Anesthesiology } from '../pages/workspace/type-reports/Anesthesiology';
// import { OperatingRoom } from '../pages/workspace/type-reports/OperatingRoom';
// import { ReportDocument } from '../pages/workspace/type-reports/ReportDocument';
// import { Resuscitation } from '../pages/workspace/type-reports/Resuscitation';
// import { Surgery } from '../pages/workspace/type-reports/Surgery';

// export const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/login" element={<Login />} />
//       <Route path="/" element={<Home />}>
//         <Route path="news" element={<News />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="workspace" element={<Workspace />}>
//           <Route path="create" element={<CreateReport />}>
//             <Route path="anesthesiology" element={<Anesthesiology />} />
//             <Route path="operating-room" element={<OperatingRoom />} />
//             <Route path="resuscitation" element={<Resuscitation />} />
//             <Route path="surgery" element={<Surgery />} />
//             <Route path="report-document" element={<ReportDocument />} />
//           </Route>

//           <Route path="report-management" element={<ReportManagement />} />
//           <Route path="document-management" element={<DocumentManagement />} />
//           <Route path="marks" element={<Marks />} />
//           <Route path="data-management" element={<DataManagement />} />
//         </Route>
//         <Route path="statistics" element={<Statistics />}>
//           <Route path="search" element={<DetailedSearch />} />
//           <Route path="medication-reports" element={<MedicationReports />} />
//           <Route path="medicines" element={<MedicationStatistics />} />
//           <Route
//             path="pharmaceutical-accounting"
//             element={<PharmaceuticalAccounting />}
//           />
//           <Route path="summary-information" element={<SummaryInformation />} />
//         </Route>
//         <Route path="chat" element={<Chat />} />
//       </Route>
//     </Routes>
//   );
// };

// const typesReport = [
//   { id: 1, path: 'anesthesiology', element: <Anesthesiology /> },
//   { id: 2, path: 'operating-room', element: <OperatingRoom/> },
//   { id: 3, path: 'resuscitation', element: <Resuscitation/> },
//   { id: 4, path: 'surgery', element: <Surgery/> },
//   { id: 5, path: 'report-document', element: <ReportDocument/> },
// ];

// export const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/login" element={<Login />} />
//       <Route path="/" element={<Home />}>
//         <Route path="news" element={<News />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="workspace" element={<Workspace />}>
//           <Route path="create" element={<CreateReport />}>
//             {typesReport.map(({id, path, element}) => (
//               <Route key={id} path={path} element={element} />
//             ))}
//           </Route>

//           <Route path="report-management" element={<ReportManagement />} />
//           <Route path="document-management" element={<DocumentManagement />} />
//           <Route path="marks" element={<Marks />} />
//           <Route path="data-management" element={<DataManagement />} />
//         </Route>
//         <Route path="statistics" element={<Statistics />}>
//           <Route path="search" element={<DetailedSearch />} />
//           <Route path="medication-reports" element={<MedicationReports />} />
//           <Route path="medicines" element={<MedicationStatistics />} />
//           <Route
//             path="pharmaceutical-accounting"
//             element={<PharmaceuticalAccounting />}
//           />
//           <Route path="summary-information" element={<SummaryInformation />} />
//         </Route>
//         <Route path="chat" element={<Chat />} />
//       </Route>
//     </Routes>
//   );
// };
