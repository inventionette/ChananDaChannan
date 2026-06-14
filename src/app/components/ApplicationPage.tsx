import { motion } from "motion/react";
import { useState } from "react";
import { FileText, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";

interface FormData {
  rollNumber: string;
  firstName: string;
  lastName: string;
  gender: string;
  branch: string;
  teacherReference: string;
  houseNumber: string;
  streetAddress: string;
  district: string;
  stateOrUT: string;
  pinCode: string;
  familyStatus: string;
  guardian: string;
  siblings: number;
  incomeProviders: string;
  incomeProvidersOther: string;
  totalAnnualIncome: number;
  matrixMarks: number;
  diplomaOrTenPlusTwo: string;
  diplomaOrTenPlusTwoScore: number;
  currentSemester: number;
  totalSemesterMarks: number;
  reappears: number;
  receivingOtherScholarship: string;
  otherScholarshipAmount: number;
  deserveScholarship: string;
  canInterview: string;
  dataAuthorization: string;
}

export function ApplicationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>(
    [],
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    console.log("Uploaded files:", uploadedFiles);

    // Note: In production, this would send data to Excel export backend
    alert(
      "Application submitted successfully! Data will be exported to Excel for review.",
    );

    setSubmitted(true);
    setTimeout(() => {
      reset();
      setUploadedFiles([]);
      setSubmitted(false);
    }, 5000);
  };

  /** const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;
    if (files) {
      const fileNames = Array.from(files).map(
        (file) => file.name,
      );
      setUploadedFiles((prev) => [...prev, ...fileNames]);
    }
  }; */

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 200,
            }}
          >
            <CheckCircle2 className="w-24 h-24 mx-auto mb-6 text-black" />
          </motion.div>
          <h2
            className="text-5xl mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Application{" "}
            <span className="italic">Received!</span>
          </h2>
          <p
            className="text-xl text-gray-600 mb-8"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            Thank you for applying to the Commrade Gurmail Singh
            Hunjan and Commrade Joginder Singh Scholarship. Your
            application has been submitted and will be reviewed
            by our selection committee.
          </p>
          <div className="bg-gray-50 border border-black/10 p-6 mb-8">
            <p
              className="text-sm text-gray-700"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              You will receive a confirmation email within 24
              hours.
            </p>
          </div>
          <p
            className="text-gray-500"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            Redirecting to form...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 px-6 lg:px-12 bg-black text-white"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <FileText className="w-16 h-16 mx-auto mb-6" />
            <h1
              className="mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
              }}
            >
              Commrade Gurmail Singh Hunjan and Commrade
              Joginder Singh Scholarship
            </h1>
            <p
              className="text-lg text-gray-300 max-w-3xl mx-auto"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              Application form for scholarship amount of Rs
              45,000 annually for one successful candidate.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Application Form */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          {/* Image Placeholder */}
          <div className="mb-12 flex justify-center">
            <div className="w-full max-w-md h-64 bg-gray-100 border-2 border-black/20 flex items-center justify-center">
              <div className="text-center p-6">
                <p
                  className="text-gray-500 text-sm mb-2"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                  }}
                >
                  Image Placeholder
                </p>
                <p
                  className="text-gray-700 font-medium"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                  }}
                >
                  Shaheed-a-Azam Bhagat Singh
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10 border-2 border-black bg-gray-50 p-6 text-center">
  <h2
    className="text-2xl mb-2"
    style={{
      fontFamily: "'Cormorant Garamond', serif",
    }}
  >
    Applications Not Available Yet
  </h2>

  <p
    className="text-gray-700"
    style={{
      fontFamily: "'Work Sans', sans-serif",
    }}
  >
    Scholarship applications are currently closed and will become available at a later date. Please check back for updates.
  </p>
</div>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
          >
            {/* Q1: Roll Number */}
            <div>
              <label
                className="block mb-2 uppercase tracking-wide text-sm"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Roll Number *
              </label>
              <input
                {...register("rollNumber", {
                  required: "Roll number is required",
                })}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              />
              {errors.rollNumber && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.rollNumber.message}
                </p>
              )}
            </div>

            {/* Q2-Q3: First and Last Name */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block mb-2 uppercase tracking-wide text-sm"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                  }}
                >
                  First Name *
                </label>
                <input
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                  }}
                />
                {errors.firstName && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="block mb-2 uppercase tracking-wide text-sm"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                  }}
                >
                  Last Name *
                </label>
                <input
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                  }}
                />
                {errors.lastName && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Q4: Gender */}
            <div>
              <label
                className="block mb-3 uppercase tracking-wide text-sm"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Gender *
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    value="Female"
                    {...register("gender", {
                      required: "Gender is required",
                    })}
                    className="w-4 h-4"
                  />
                  <span
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                    }}
                  >
                    Female
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    value="Male"
                    {...register("gender")}
                    className="w-4 h-4"
                  />
                  <span
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                    }}
                  >
                    Male
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    value="Prefer not to say"
                    {...register("gender")}
                    className="w-4 h-4"
                  />
                  <span
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                    }}
                  >
                    Prefer not to say
                  </span>
                </label>
              </div>
              {errors.gender && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.gender.message}
                </p>
              )}
            </div>

            {/* Q5: Branch */}
            <div>
              <label
                className="block mb-2 uppercase tracking-wide text-sm"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Branch *
              </label>
              <input
                {...register("branch", {
                  required: "Branch is required",
                })}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              />
              {errors.branch && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.branch.message}
                </p>
              )}
            </div>

            {/* Q6: Teacher Reference */}
            <div>
              <label
                className="block mb-2 uppercase tracking-wide text-sm"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Reference: Name of current college teacher *
              </label>
              <input
                {...register("teacherReference", {
                  required: "Teacher reference is required",
                })}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              />
              {errors.teacherReference && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.teacherReference.message}
                </p>
              )}
            </div>

            {/* Q7-Q8: Address */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block mb-2 uppercase tracking-wide text-sm"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                  }}
                >
                  Permanent address - house number *
                </label>
                <input
                  {...register("houseNumber", {
                    required: "House number is required",
                  })}
                  placeholder="If no house number, please enter 0"
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                  }}
                />
                {errors.houseNumber && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.houseNumber.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="block mb-2 uppercase tracking-wide text-sm"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                  }}
                >
                  Street address *
                </label>
                <input
                  {...register("streetAddress", {
                    required: "Street address is required",
                  })}
                  placeholder="if no street, please N/A"
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                  }}
                />
                {errors.streetAddress && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.streetAddress.message}
                  </p>
                )}
              </div>
            </div>

            {/* Q9-Q11: District, State, PIN */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label
                  className="block mb-2 uppercase tracking-wide text-sm"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                  }}
                >
                  District Address *
                </label>
                <input
                  {...register("district", {
                    required: "District is required",
                  })}
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                  }}
                />
                {errors.district && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.district.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="block mb-2 uppercase tracking-wide text-sm"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                  }}
                >
                  State or Union Territory *
                </label>
                <input
                  {...register("stateOrUT", {
                    required: "State/UT is required",
                  })}
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                  }}
                />
                {errors.stateOrUT && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.stateOrUT.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="block mb-2 uppercase tracking-wide text-sm"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                  }}
                >
                  PIN Code *
                </label>
                <input
                  {...register("pinCode", {
                    required: "PIN code is required",
                  })}
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                  }}
                />
                {errors.pinCode && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.pinCode.message}
                  </p>
                )}
              </div>
            </div>

            {/* Q12: Family Status */}
            <div>
              <label
                className="block mb-2 uppercase tracking-wide text-sm"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Family Status *
              </label>
              <select
                {...register("familyStatus", {
                  required: "Family status is required",
                })}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                <option value="">Select...</option>
                <option value="Both parents alive">
                  Both parents alive
                </option>
                <option value="Only mother alive">
                  Only mother alive
                </option>
                <option value="Only Father alive">
                  Only Father alive
                </option>
                <option value="Both parents are no more">
                  Both parents are no more
                </option>
              </select>
              {errors.familyStatus && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.familyStatus.message}
                </p>
              )}
            </div>

            {/* Q13: Guardian */}
            <div>
              <label
                className="block mb-2 uppercase tracking-wide text-sm"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                If both your parents are no more, who is looking
                after you?
              </label>
              <input
                {...register("guardian")}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              />
            </div>

            {/* Q14: Siblings */}
            <div>
              <label
                className="block mb-2 uppercase tracking-wide text-sm"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                How many siblings do you have? *
              </label>
              <input
                type="number"
                {...register("siblings", {
                  required: "Number of siblings is required",
                  min: {
                    value: 0,
                    message: "Cannot be negative",
                  },
                })}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
                min="0"
              />
              {errors.siblings && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.siblings.message}
                </p>
              )}
            </div>

            {/* Q15: Income Providers */}
            <div>
              <label
                className="block mb-2 uppercase tracking-wide text-sm"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Which members of the family provide income? *
              </label>
              <select
                {...register("incomeProviders", {
                  required: "Income providers is required",
                })}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                <option value="">Select...</option>
                <option value="Both parents">
                  Both parents
                </option>
                <option value="1 parent">1 parent</option>
                <option value="All members excluding you">
                  All members excluding you
                </option>
                <option value="All members including you">
                  All members including you
                </option>
                <option value="None">None</option>
                <option value="Others">Others</option>
              </select>
              {errors.incomeProviders && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.incomeProviders.message}
                </p>
              )}
            </div>

            {/* Q16: Income Providers Other */}
            <div>
              <label
                className="block mb-2 uppercase tracking-wide text-sm"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                If others, please specify
              </label>
              <input
                {...register("incomeProvidersOther")}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              />
            </div>

            {/* Q17: Annual Income */}
            <div>
              <label
                className="block mb-2 uppercase tracking-wide text-sm"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Total annual family income (in rupees) *
              </label>
              <input
                type="number"
                {...register("totalAnnualIncome", {
                  required: "Annual income is required",
                  min: {
                    value: 0,
                    message: "Cannot be negative",
                  },
                })}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
                min="0"
              />
              {errors.totalAnnualIncome && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.totalAnnualIncome.message}
                </p>
              )}
            </div>

            {/* Q18: Matrix Marks */}
            <div>
              <label
                className="block mb-2 uppercase tracking-wide text-sm"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Matrix Marks % *
              </label>
              <input
                type="number"
                {...register("matrixMarks", {
                  required: "Matrix marks is required",
                  min: {
                    value: 0,
                    message: "Cannot be negative",
                  },
                  max: {
                    value: 100,
                    message: "Cannot exceed 100",
                  },
                })}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
                min="0"
                max="100"
                step="0.01"
              />
              {errors.matrixMarks && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.matrixMarks.message}
                </p>
              )}
            </div>

            {/* Q19: 10+2 or Diploma */}
            <div>
              <label
                className="block mb-2 uppercase tracking-wide text-sm"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                10+2 or Diploma? *
              </label>
              <select
                {...register("diplomaOrTenPlusTwo", {
                  required: "This field is required",
                })}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                <option value="">Select...</option>
                <option value="10+2">10+2</option>
                <option value="Diploma">Diploma</option>
              </select>
              {errors.diplomaOrTenPlusTwo && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.diplomaOrTenPlusTwo.message}
                </p>
              )}
            </div>

            {/* Q20: Score */}
            <div>
              <label
                className="block mb-2 uppercase tracking-wide text-sm"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                10+2 or Diploma Score (%) *
              </label>
              <input
                type="number"
                {...register("diplomaOrTenPlusTwoScore", {
                  required: "Score is required",
                  min: {
                    value: 0,
                    message: "Cannot be negative",
                  },
                  max: {
                    value: 100,
                    message: "Cannot exceed 100",
                  },
                })}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
                min="0"
                max="100"
                step="0.01"
              />
              {errors.diplomaOrTenPlusTwoScore && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.diplomaOrTenPlusTwoScore.message}
                </p>
              )}
            </div>

            {/* Q21: Current Semester */}
            <div>
              <label
                className="block mb-2 uppercase tracking-wide text-sm"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Which semester are you in now? *
              </label>
              <input
                type="number"
                {...register("currentSemester", {
                  required: "Current semester is required",
                  min: {
                    value: 1,
                    message: "Must be at least 1",
                  },
                })}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
                min="1"
              />
              {errors.currentSemester && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.currentSemester.message}
                </p>
              )}
            </div>

            {/* Q22: Total Semester Marks */}
            <div>
              <label
                className="block mb-2 uppercase tracking-wide text-sm"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Total marks in all semester % *
              </label>
              <input
                type="number"
                {...register("totalSemesterMarks", {
                  required: "Total semester marks is required",
                  min: {
                    value: 0,
                    message: "Cannot be negative",
                  },
                  max: {
                    value: 100,
                    message: "Cannot exceed 100",
                  },
                })}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
                min="0"
                max="100"
                step="0.01"
              />
              {errors.totalSemesterMarks && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.totalSemesterMarks.message}
                </p>
              )}
            </div>

            {/* Q23: Reappears */}
            <div>
              <label
                className="block mb-2 uppercase tracking-wide text-sm"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                How many reappears do you have? *
              </label>
              <input
                type="number"
                {...register("reappears", {
                  required: "Number of reappears is required",
                  min: {
                    value: 0,
                    message: "Cannot be negative",
                  },
                })}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
                min="0"
              />
              {errors.reappears && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.reappears.message}
                </p>
              )}
            </div>

            {/* Q24: Other Scholarship */}
            <div>
              <label
                className="block mb-3 uppercase tracking-wide text-sm"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Did you receive or are you now receiving any
                other scholarship during your graduation course
                in GNDEC? *
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    value="Yes"
                    {...register("receivingOtherScholarship", {
                      required: "This field is required",
                    })}
                    className="w-4 h-4"
                  />
                  <span
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                    }}
                  >
                    Yes
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    value="No"
                    {...register("receivingOtherScholarship")}
                    className="w-4 h-4"
                  />
                  <span
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                    }}
                  >
                    No
                  </span>
                </label>
              </div>
              {errors.receivingOtherScholarship && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.receivingOtherScholarship.message}
                </p>
              )}
            </div>

            {/* Q25: Other Scholarship Amount */}
            <div>
              <label
                className="block mb-2 uppercase tracking-wide text-sm"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                If yes, how much total did you receive in rupees
                throughout your graduation course in GNDEC?
              </label>
              <input
                type="number"
                {...register("otherScholarshipAmount", {
                  min: {
                    value: 0,
                    message: "Cannot be negative",
                  },
                })}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
                min="0"
              />
              {errors.otherScholarshipAmount && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.otherScholarshipAmount.message}
                </p>
              )}
            </div>

            {/* Q26: Why deserve scholarship */}
            <div>
              <label
                className="block mb-2 uppercase tracking-wide text-sm"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Why do you think you deserve this scholarship or
                need financial help? Please provide long answer.
                *
              </label>
              <textarea
                {...register("deserveScholarship", {
                  required: "This field is required",
                  minLength: {
                    value: 50,
                    message:
                      "Please provide a detailed answer (at least 50 characters)",
                  },
                })}
                rows={8}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              />
              {errors.deserveScholarship && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.deserveScholarship.message}
                </p>
              )}
            </div>

            {/* Q27: Can Interview */}
            <div>
              <label
                className="block mb-3 uppercase tracking-wide text-sm"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Can we interview you? *
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    value="Yes"
                    {...register("canInterview", {
                      required: "This field is required",
                    })}
                    className="w-4 h-4"
                  />
                  <span
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                    }}
                  >
                    Yes
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    value="No"
                    {...register("canInterview")}
                    className="w-4 h-4"
                  />
                  <span
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                    }}
                  >
                    No
                  </span>
                </label>
              </div>
              {errors.canInterview && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.canInterview.message}
                </p>
              )}
            </div>

            {/* Q28: Authorization */}
            <div>
              <label
                className="block mb-3 uppercase tracking-wide text-sm"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                You authorise us to collect, use, store and
                verify your personal information and data
                provided by you in the application form. *
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    value="Agree"
                    {...register("dataAuthorization", {
                      required: "You must agree to proceed",
                    })}
                    className="w-4 h-4"
                  />
                  <span
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                    }}
                  >
                    Agree
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    value="Disagree"
                    {...register("dataAuthorization")}
                    className="w-4 h-4"
                  />
                  <span
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                    }}
                  >
                    Disagree
                  </span>
                </label>
              </div>
              {errors.dataAuthorization && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.dataAuthorization.message}
                </p>
              )}
            </div>
              
           
          </motion.form>
        </div>
      </section>
    </div>
  );
}