import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import AddUser from './AddUser';
import EditUser from './EditUser';
import AddOrganiztion from './AddOrganization';
import EditOrganization from './EditOrganization';
import UserOrderTable from '../../pages/user/OrderTable';
import OperationLog from '../../pages/user/OperationLog';
import AddAdmin from './AddAdmin';
import EditAdmin from './EditAdmin';
import AddCountry from './AddCountry';
import EditCountry from './EditCountry';
import AddProvince from './Province/AddProvince';
import EditProvince from './Province/EditProvince';
import AddCategory from './Category/AddCategory'
import EditCategory from './Category/EditCategory'
import AddSubCategory from './SubCategory/AddSubCategory';
import EditSubCategory from './SubCategory/EditSubCategory';
import EditDesignation from './Designation/EditDesignation';
import AddDesignation from './Designation/AddDesignation';
import AddOccupation from './Occupation/AddOccupation';
import EditOccupation from './Occupation/EditOccupation';
import EditPosition from './Position/EditPosition';
import AddPosition from './Position/AddPosition';
import AddSpeciality from './Specialities/AddSpeciality';
import EditSpeciality from './Specialities/EditSpeciality';
import AddCapacityBuilding from './CapacityBuilding/AddCapacityBuilding';
import EditCapacityBuilding from './CapacityBuilding/EditCapacityBuilding';
import AddAssemblyType from './AssemblyTypes/AddAssemblyType';
import EditAssemblyType from './AssemblyTypes/EditAssemblyType';
import AddPoliticalParty from './PoliticalParty/AddPoliticalParty';
import EditPoliticalParty from './PoliticalParty/EditPoliticalParty';
import AddPartyAlliance from './PartyAalliance/AddPartyAlliance';
import EditPartyAlliance from './PartyAalliance/EditPartyAlliance';
import AddCaste from './Castes/AddCaste';
import EditCaste from './Castes/EditCaste';
import AddLegislativeInterests from './LegislativeInterests/AddLegislativeInterests';
import EditLegislativeInterests from './PartyAalliance/EditPartyAlliance';
import AddEmployer from './Employer/AddEmployer';
import EditEmployer from './Employer/EditEmployer';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 1,
  borderRadius: '4px',
  // minWidth: '70%',
};

export default function CModel(props) {
  // console.log(props);
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={props.open}
        onClose={() => props.setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} width={props.filter == 'edit-user' ? '30%':props.width? props.width: '60%'}>
          {props.filter == 'edit-user' ? (
            <EditUser data={props.data} open={props.open} setOpen={props.setOpen} />
          ) : props.filter == 'add-organization' ? (
            <AddOrganiztion setOpen={props.setOpen} />
          ) : props.filter == 'edit-organization' ? (
            <EditOrganization data={props.data} open={props.open} setOpen={props.setOpen} />
          ) : props.filter == 'user-order-table' ? (
            <UserOrderTable data={props.data} open={props.open} setOpen={props.setOpen} />
          ) : props.filter == 'user-opration-log' ? (
            <OperationLog data={props.data} open={props.open} setOpen={props.setOpen} />
          ) : props.filter == 'add-admin' ? (
            <AddAdmin data={props.data} open={props.open} setOpen={props.setOpen} recall={props.recall} />
          ) : props.filter == 'edit-admin' ? (
            <EditAdmin data={props.data} open={props.open} setOpen={props.setOpen} recall={props.recall} />
          ) : props.filter == 'add-country' ? (
            <AddCountry data={props.data} open={props.open} setOpen={props.setOpen}  recall={props.recall} />
          ): props.filter == 'edit-country' ? (
            <EditCountry data={props.data} open={props.open} setOpen={props.setOpen} recall={props.recall}/>
          ) : props.filter == 'add-province' ? (
            <AddProvince data={props.data} open={props.open} countries={props.countries} setOpen={props.setOpen} recall={props.recall}/>
          ): props.filter == 'edit-province' ? (
            <EditProvince data={props.data} open={props.open} countries={props.countries} setOpen={props.setOpen} recall={props.recall}/>
          ): props.filter == 'add-category' ? (
            <AddCategory data={props.data} open={props.open} setOpen={props.setOpen} recall={props.recall} />
          ): props.filter == 'edit-category' ? (
            <EditCategory data={props.data} open={props.open} setOpen={props.setOpen} recall={props.recall} />
          ): props.filter == 'add-subcategory' ? (
            <AddSubCategory data={props.data} open={props.open} setOpen={props.setOpen} categories={props.categories} recall={props.recall}/>
          ): props.filter == 'edit-subcategory' ? (
            <EditSubCategory data={props.data} open={props.open} setOpen={props.setOpen} categories={props.categories} recall={props.recall}/>
          ) : props.filter == 'add-designation' ? (
            <AddDesignation data={props.data} open={props.open} setOpen={props.setOpen} recall={props.recall}/>
          ): props.filter == 'edit-designation' ? (
            <EditDesignation data={props.data} open={props.open} setOpen={props.setOpen} recall={props.recall}/>
          ) : props.filter == 'add-occupation' ? (
            <AddOccupation data={props.data} open={props.open} setOpen={props.setOpen} recall={props.recall}/>
          ): props.filter == 'edit-occupation' ? (
            <EditOccupation data={props.data} open={props.open} setOpen={props.setOpen} recall={props.recall}/>
          ): props.filter == 'add-position' ? (
            <AddPosition data={props.data} open={props.open} setOpen={props.setOpen} recall={props.recall}/>
          ): props.filter == 'edit-position' ? (
            <EditPosition data={props.data} open={props.open} setOpen={props.setOpen} recall={props.recall}/>
          ) : props.filter == 'add-speciality' ? (
            <AddSpeciality data={props.data} open={props.open} setOpen={props.setOpen} recall={props.recall}/>
          ): props.filter == 'edit-speciality' ? (
            <EditSpeciality data={props.data} open={props.open} setOpen={props.setOpen} recall={props.recall}/>
          ): props.filter == 'add-capacity' ? (
            <AddCapacityBuilding data={props.data} open={props.open} setOpen={props.setOpen} recall={props.recall} />
          ): props.filter == 'edit-capacity' ? (
            <EditCapacityBuilding data={props.data} open={props.open} setOpen={props.setOpen} recall={props.recall}/>
          ) : props.filter == 'add-assembly' ? (
            <AddAssemblyType data={props.data} open={props.open} setOpen={props.setOpen} />
          ): props.filter == 'edit-assembly' ? (
            <EditAssemblyType data={props.data} open={props.open} setOpen={props.setOpen} />
          ) : props.filter == 'add-political-party' ? (
            <AddPoliticalParty data={props.data} open={props.open} setOpen={props.setOpen} />
          ): props.filter == 'edit-political-party' ? (
            <EditPoliticalParty data={props.data} open={props.open} setOpen={props.setOpen} />
          ) : props.filter == 'add-party-alliance' ? (
            <AddPartyAlliance data={props.data} open={props.open} setOpen={props.setOpen} />
          ): props.filter == 'edit-party-alliance' ? (
            <EditPartyAlliance data={props.data} open={props.open} setOpen={props.setOpen} />
          ): props.filter == 'add-caste' ? (
            <AddCaste data={props.data} open={props.open} setOpen={props.setOpen} />
          ): props.filter == 'edit-caste' ? (
            <EditCaste data={props.data} open={props.open} setOpen={props.setOpen} />
          ): props.filter == 'add-legislative-interests' ? (
            <AddLegislativeInterests data={props.data} open={props.open} setOpen={props.setOpen} />
          ): props.filter == 'edit-legislative-interests' ? (
            <EditLegislativeInterests data={props.data} open={props.open} setOpen={props.setOpen} />
          ) : props.filter == 'add-employer' ? (
            <AddEmployer data={props.data} open={props.open} setOpen={props.setOpen} />
          ): props.filter == 'edit-employer' ? (
            <EditEmployer data={props.data} open={props.open} setOpen={props.setOpen} />
          ) :''
          }
        </Box>
      </Modal>
    </div>
  );
}
