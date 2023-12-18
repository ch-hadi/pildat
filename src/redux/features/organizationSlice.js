import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { ApiCall } from "../util/apicall";

export const getOrganizations = createAsyncThunk('organization/organization', async(data,ThunkApi)=>{
    let url = "https://dummyjson.com/organization"
    // let data = await ApiCall(url)
    return data?.organization
})

export const createOrganization = createAsyncThunk('create-organization/organization', async(data,ThunkApi)=>{
    // let url = "https://dummyjson.com/organization"
    // let data = await ApiCall(url)
    // console.log(data)
    return data
})


export const updateOrganization = createAsyncThunk('update-organization/organization', async(data,ThunkApi)=>{
    // let url = "https://dummyjson.com/organization"
    // let data = await ApiCall(url)
    // console.log(data)
    return data
})

export const deleteOrganization = createAsyncThunk('delete-organization/organization', async(data,ThunkApi)=>{
    // let url = "https://dummyjson.com/organization"
    // let data = await ApiCall(url)
    // console.log(data)
    return data
})


export const organizationSlice = createSlice({
    name : 'organization',
    initialState:{
    organizations:[],
    isLoading:false,
    isSuccess:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(getOrganizations.pending, (state , action)=>{
            state.isLoading = true;
            state.isSuccess=false
         })
        builder.addCase(getOrganizations.fulfilled, (state , action)=>{
           state.organizations = action.payload
           state.isLoading = false;
           state.isSuccess=true
           
        })
        builder.addCase(getOrganizations.rejected, (state , action)=>{
            state.isLoading = false;
            state.isSuccess=false
         })
//   -------------- Create Organization -----------

 builder.addCase(createOrganization.pending, (state , action)=>{
            state.isLoading = true;
            state.isSuccess=false
         })
        builder.addCase(createOrganization.fulfilled, (state , action)=>{
           state.organizations.unshift(action.payload)
           state.isLoading = false;
           state.isSuccess=true
           
        })
        builder.addCase(createOrganization.rejected, (state , action)=>{
            state.isLoading = false;
            state.isSuccess=false
         })
//  --------- Update Organization ---------
        builder.addCase(updateOrganization.pending, (state , action)=>{
            state.isLoading = true;
            state.isSuccess=false
         })
        builder.addCase(updateOrganization.fulfilled, (state , action)=>{
           const indexToUpdate = state.organizations.findIndex(
          (org) => org.name === action.payload.name
        );

        if (indexToUpdate !== -1) {
          // Update the organization in the array
          state.organizations[indexToUpdate] = action.payload;

          // Set isLoading to false and isSuccess to true to indicate success
          state.isLoading = false;
          state.isSuccess = true;
           
        }})
        builder.addCase(updateOrganization.rejected, (state , action)=>{
            state.isLoading = false;
            state.isSuccess=false
         })

        //   --------- Delete Organization ----------
        builder.addCase(deleteOrganization.pending, (state , action)=>{
            state.isLoading = true;
            state.isSuccess=false
         })
        builder.addCase(deleteOrganization.fulfilled, (state , action)=>{
           const { name } = action.payload;

  // Remove the organization with the specified ID from the state
            state.organizations = state.organizations.filter(org => org.name !== name);

            state.isLoading = false;
            state.isSuccess = true;
                    
        })
        builder.addCase(deleteOrganization.rejected, (state , action)=>{
            state.isLoading = false;
            state.isSuccess=false
         })
    }
})

export default organizationSlice.reducer