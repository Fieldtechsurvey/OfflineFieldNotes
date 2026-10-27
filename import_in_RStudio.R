# Field Tech Survey - OHL Inspect: Import exported CSV
# CSV contains one row per fault. Defect-free poles have one row with blank fault fields.
file <- file.choose()
inspections <- read.csv(file, stringsAsFactors = FALSE, fileEncoding = "UTF-8-BOM", na.strings = NULL)
inspections$recorded_at_utc <- as.POSIXct(inspections$recorded_at_utc, format = "%Y-%m-%dT%H:%M:%OS", tz = "UTC")
View(inspections)
cat("Inspection records:", length(unique(inspections$record_id)), "\n")
cat("Fault entries:", sum(nzchar(inspections$fault_category)), "\n")
print(table(inspections$fault_category[nzchar(inspections$fault_category)]))
# If you combine several CSV exports, de-duplicate identical fault rows by record_id + fault_number.
