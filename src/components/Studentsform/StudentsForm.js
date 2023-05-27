import { Table } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import moment from 'dayjs';
import {
  FooterToolbar,
  PageContainer,
  ProForm,
  ProFormDatePicker,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProFormUploadButton,
  ProLayout,
  QueryFilter,
} from '@ant-design/pro-components';
import { Card } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { newcontext } from '../../App';


const columns = [
  {
    title: 'Fees Details',
    dataIndex: 'name',
  },
  {
    title: '',
    dataIndex: 'fees',
  },
];
const data = [];

  data.push({

    name: (<a href="/Class1General">Class 1 General </a>),
    fees: `6,200.00 `,
    
  });
  data.push({

    name: `Class 1 Lump Sum `,
    fees: `4,250.00 `,
  });
  data.push({

    name: `Class 1- I Installment `,
    fees: `4,000.00 `,
  });
  data.push({

    name: `Class 2 General `,
    fees: `8,200.00 `,
  });

  data.push({

    name: `Class 2 Lump Sum `,
    fees: `3,250.00 `,
  });

  data.push({

    name: `Class 2- I Installment `,
    fees: `3,300.00 `,
  });
  data.push({

    name: `Class 3 Lump Sum `,
    fees: `7,450.00 `,
  });
  data.push({

    name: `Class 3- I Installment`,
    fees: `4,000.00 `,
  });
   
  data.push({

    name: ` Class 4 General`,
    fees: `6,450.00 `,
  });


export default () => {

  // const [array, setarray] = useContext(newcontext);
  // console.log(array);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        // key: 'odd',
        // text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        // key: 'even',
        // text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return (
    <ProLayout
      fixSiderbar
      fixedHeader
      breakpoint={false}
      defaultCollapsed
      pageTitleRender={false}
      menuDataRender={() => [
      ]}
    >
      <PageContainer title="Student Admission" style={{width:"1250px" , height:"auto", marginLeft:"200px", marginTop:"70px", backgroundColor:"pink", fontWeight:"bold"}}> 
        <Card>
          <ProForm
            submitter={{
              render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
            }}
            onFinish={async (values) => console.log(values)}
          >
            <ProForm.Group>
              <ProFormText
                name="Admission Number"
                label="Admission Number *"
                placeholder="Enter your admission No"
              />    

              <ProFormText
                width="md"
                name="name"
                label="First Name *"
                placeholder="Enter first name"
              />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormText
                name={['contract', 'name']}
                label="Last Name"
                placeholder="Enter last name"
              />
              <ProFormText
              width="lg"
              name="Address"
              label="Address *"
              placeholder="Enter address"
            />
              <ProFormDatePicker
              width="md"
              name="date"
              label="Admission Date *"
              placeholder="select admission date"
              transform={(value) => {
                return {
                  date: moment(value).unix(),
                };
              }}
            />
              
            </ProForm.Group>
            <ProForm.Group>
              <ProFormSelect
                options={[
                  {
                    value: 'OBC',
                    label: 'OBC',
                  },
                  {
                    value: 'SC/ST',
                    label: 'SC/ST',
                  },
                  {
                    value: 'General',
                    label: 'General',
                  },
                  {
                    value: 'Physically Challenged',
                    label: 'Physically Challenged',
                  },
                ]}
                width="md"
                name="chapter"
                label="Category *"
                placeholder="select category"
              />
              <ProFormDatePicker
              name="date"
              label="Date Of Birth *"
              placeholder="select date of birth"
              transform={(value) => {
                return {
                  date: moment(value).unix(),
                };
              }}
            />
            </ProForm.Group>
            <ProFormText
              name="Aadhaar Number"
              label="Aadhaar No *"
             placeholder="Enter your aadhaar no"
            />
            <ProFormText
              width="xs"
              name="mangerName"
              label="Religion"
              placeholder="Enter your religion"
            />
            <ProForm.Group>
              <ProFormSelect
                initialValue=""
                options={[
                  {
                    value: 'Class 1',
                    label: 'Class 1',
                  },
                  {
                    value: 'Class 2',
                    label: 'Class 2',
                  },
                  {
                    value: 'Class 3',
                    label: 'Class 3',
                  },
                  {
                    value: 'Class 4',
                    label: 'Class 4',
                  },
                  {
                    value: 'Class 5',
                    label: 'Class 5',
                  },
                  {
                    value: 'Class 6',
                    label: 'Class 6',
                  },
                  {
                    value: 'Class 7',
                    label: 'Class 7',
                  },
                  {
                    value: 'Class 8',
                    label: 'Class 8',
                  },
                ]}
                width="md"
                name="useMode"
                label="Select Class *"
                placeholder="select your class"
              />
              <ProFormSelect
                options={[
                  {
                    value: 'A',
                    label: 'A',
                  },
                  {
                    value: 'B',
                    label: 'B',
                  },
                  {
                    value: 'C',
                    label: 'C',
                  },
                  {
                    value: 'D',
                    label: 'D',
                  },
                ]}
                initialValue=""
                width="xs"
                name="Section"
                label="Section *"
                placeholder="Enter section"
              />

              <ProFormSelect
                options={[
                  {
                    value: 'A+',
                    label: 'A+',
                  },
                  {
                    value: 'B+',
                    label: 'B+',
                  },
                  {
                    value: 'O+',
                    label: 'O+',
                  },
                  {
                    value: 'AB+',
                    label: 'AB+',
                  },
                  {
                    value: 'B-',
                    label: 'B-',
                  },
                  {
                    value: 'O-',
                    label: 'O-',
                  },
                  {
                    value: 'AB-',
                    label: 'AB-',
                  },
                  {
                    value: 'A-',
                    label: 'A-',
                  },
                  {
                    value: 'B-',
                    label: 'B-',
                  },
                ]}
                initialValue=""
                width="md"
                name="Blood Group"
                label="Blood Group *"
                // placeholder="select blood group"
                // tooltip="最长为 24 位"
              />
              <ProFormRadio.Group
                width="md"
                label="Gender *"
                name="invoiceType"
                initialValue=""
                options={['Male', 'Female', 'Others']}
              />
            </ProForm.Group>
            <ProFormSelect
                options={[
                  {
                    value: 'YELLOW',
                    label: 'YELLOW',
                  },
                  {
                    value: 'BLUE',
                    label: 'BLUE',
                  },
                  {
                    value: 'GREEN',
                    label: 'GREEN',
                  },
                  {
                    value: 'RED',
                    label: 'RED',
                  },
                ]}
                initialValue=""
                width="s"
                name="house"
                label="House"
                // tooltip="最长为 24 位"
              />
              <ProFormText
              width="s"
              label="Height"
              placeholder="Enter your height"
            />
            <ProFormText
              width="s"
              label="Weight"
              placeholder="Enter your weight"
            />
            <ProFormUploadButton
              extra="only accept：.jpg .png .zip .doc .pdf"
              label="Student Photo *"
              name="file"
              title="select"
            />
            <ProFormText
              width="md"
              label="Mobile Number *"
              placeholder='Enter Mobile No'
            />
            <ProFormText
              width="md"
              label="E-mail ID"
              placeholder='Enter e-mail id'
            />
            <ProFormTextArea width="xl" label="Medical History" placeholder="Enter medical details" name="remark" />
            <ProFormTextArea width="xl" label="Add more details" placeholder="Add more details" name="remark" />
          </ProForm>
        </Card>
      </PageContainer>
      <div style={{marginLeft:"200px", marginTop:"20px", backgroundColor:"pink", fontWeight:"bold"}}> 
        <h1 style={{marginTop:"5px", marginLeft:"10px"}}><b>Transport Details</b></h1>
      <QueryFilter layout="vertical">
      <ProFormSelect
                options={[
                  {
                    value: 'Brooklyn Central',
                    label: 'Brooklyn Central',
                  },
                  {
                    value: 'Brooklyn South',
                    label: 'Brooklyn South',
                  },
                  {
                    value: 'Brooklyn North',
                    label: 'Brooklyn North',
                  },
                  {
                    value: 'Brooklyn West',
                    label: 'Brooklyn West',
                  },
                  {
                    value: 'Brooklyn East',
                    label: 'Brooklyn East',
                  },
                ]}
                initialValue=""
                width="md"
                name="Route list"
                label="Route List"
                // tooltip="最长为 24 位"
              />
              <ProFormSelect
                options={[
                  {
                    value: 'Brooklyn Central',
                    label: 'Brooklyn Central',
                  },
                  {
                    value: 'Brooklyn South',
                    label: 'Brooklyn South',
                  },
                  {
                    value: 'Brooklyn North',
                    label: 'Brooklyn North',
                  },
                  {
                    value: 'Brooklyn West',
                    label: 'Brooklyn West',
                  },
                  {
                    value: 'Brooklyn East',
                    label: 'Brooklyn East',
                  },
                ]}
                initialValue=""
                width="md"
                name="pickup point"
                label="Pickup Point"
                // tooltip="最长为 24 位"
              />
              <ProFormSelect
                options={[
                  {
                    value: 'January',
                    label: 'January',
                  },
                  {
                    value: 'February',
                    label: 'February',
                  },
                  {
                    value: 'March',
                    label: 'March',
                  },
                  {
                    value: 'April',
                    label: 'April',
                  },
                  {
                    value: 'May',
                    label: 'May',
                  },
                  {
                    value: 'June',
                    label: 'June',
                  },
                  {
                    value: 'July',
                    label: 'July',
                  },
                  {
                    value: 'August',
                    label: 'August',
                  },
                  {
                    value: ' September',
                    label: ' September',
                  },
                  {
                    value: 'October',
                    label: 'October',
                  },
                  {
                    value: 'November',
                    label: 'November',
                  },
                  {
                    value: 'December',
                    label: 'December',
                  },
                  
                ]}
                initialValue=""
                width="md"
                name="fees month"
                label="Fees Month"
                // tooltip="最长为 24 位"
              />
    </QueryFilter>
      </div>

      <div style={{marginLeft:"200px", marginTop:"20px", backgroundColor:"pink", fontWeight:"bold"}}> 
        <h1 style={{marginTop:"5px", marginLeft:"25px"}}><b>Hostel Details</b></h1>
      <QueryFilter layout="vertical">
      <ProFormSelect
                options={[
                  {
                    value: 'Boys Hostel 101',
                    label: 'Boys Hostel 101',
                  },
                  {
                    value: 'Boys Hostel 102',
                    label: 'Boys Hostel 102',
                  },
                  {
                    value: 'Girls Hostel 101',
                    label: 'Girls Hostel 101',
                  },
                  {
                    value: 'Girls Hostel 102',
                    label: 'Girls Hostel 102',
                  },
                ]}
                initialValue=""
                width="lg"
                name="Hostel"
                label="Hostel"
                // tooltip="最长为 24 位"
              />
              <ProFormSelect
                options={[
                  {
                    value: '101',
                    label: '101',
                  },
                  {
                    value: '102',
                    label: '102',
                  },
                  {
                    value: '103',
                    label: '103',
                  },
                  {
                    value: '104',
                    label: '104',
                  },
                  {
                    value: '105',
                    label: '105',
                  },
                ]}
                initialValue=""
                width="md "
                name="Room Number"
                label="Room Number"
              />
    </QueryFilter>
      </div>
      <PageContainer  style={{width:"1250px" , height:"auto", marginLeft:"200px", marginTop:"70px", backgroundColor:"pink", fontWeight:"bold" }}> 
      <h1 style={{marginBottom:"15px", marginLeft:"10px"}}><b>Parent Guardian Details</b></h1>
        <Card>
          <ProForm
            submitter={{
              render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
            }}
            onFinish={async (values) => console.log(values)}
          >
            <ProForm.Group>
              <ProFormText
                name=""
                label="Father Name *"
                placeholder="Enter father name"
              />    

              <ProFormText
                width="md"
                name="name"
                label="Father Phone *"
                placeholder="Enter phone no"
              />
              <ProFormText
                width="md"
                name="name"
                label="Father Occupation "
                placeholder="Enter occupation"
              />
              <ProFormUploadButton
              extra="only accept：.jpg .png .zip .doc .pdf"
              label="Father Photo *"
              name="file"
              title="select"
              placeholder="select photo"
            />
             </ProForm.Group>

             <ProForm.Group>
              <ProFormText
                name=""
                label="Mother Name *"
                placeholder="Enter mother name"
              />    

              <ProFormText
                width="md"
                name="name"
                label="Mother Phone *"
                placeholder="Enter phone no"
              />
              <ProFormText
                width="md"
                name="name"
                label="Mother Occupation"
                placeholder="Enter occupation"
              />
              <ProFormUploadButton
              extra="only accept：.jpg .png .zip .doc .pdf"
              label="Mother Photo *"
              name="file"
              title="select"
              placeholder="select photo"
            />
             </ProForm.Group>
             <ProFormRadio.Group
                width="md"
                label="If Guardian is *"
                name="invoiceType"
                initialValue=""
                options={['Father', 'Mother', 'Others']}
              />
              <ProForm.Group>
              <ProFormText
                name=""
                label="Guardian Name *"
                placeholder="Enter guardian name"
              />    

              <ProFormText
                width="md"
                name="name"
                label="Guardian Phone *"
                placeholder="Enter phone no"
              />
              <ProFormText
                width="md"
                name="name"
                label="Guardian Occupation"
                placeholder="Enter occupation"
              />
            <ProFormText
                width="md"
                name="name"
                label="Guardian Relation *"
                placeholder="Enter relation with student"
              />
              <ProFormText
                width="md"
                name="name"
                label="Guardian E-mail"
                placeholder="Enter e-mail"
              />
              <ProFormUploadButton
              extra="only accept：.jpg .png .zip .doc .pdf"
              label="Guardian Photo *"
              name="file"
              title="select"
              tooltip="最长为 24 位"
              placeholder="select photo"
            />
             </ProForm.Group>
          </ProForm>
        </Card>
      </PageContainer>
       <div style={{marginLeft:"200px", backgroundColor:"pink",color:"pink",fontWeight:"bold"}}>
       <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
       </div>

    </ProLayout>

    
  );
};