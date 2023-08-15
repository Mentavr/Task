import { Box, InputLabel, TextField, FormHelperText} from '@mui/material';
import styled from 'styled-components';
import LoadingButton from '@mui/lab/LoadingButton';

const StyledTextField = styled(TextField)`
  background-color: white;
  position: relative;
  width: 3em
  background-color: #0e3f7c;
`;

const StyledLoadingButton = styled(LoadingButton)`
  max-width: 200px;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInputLabel = styled(InputLabel)`
  margin-left: 20px;
  margin-top: 15px;
`;
const StyledFormHelperText = styled(FormHelperText)`
  position: absolute;
  top: 95px;
  left: 19px;
  color: red;
`;


export {StyledTextField, StyledLoadingButton , StyledBox, StyledInputLabel, StyledFormHelperText};
