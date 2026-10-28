# Field Tech Survey — one complete CSV file, one row per pole inspection.
inspections <- read.csv(file.choose(), stringsAsFactors = FALSE, check.names = FALSE, fileEncoding = "UTF-8-BOM")
inspections$recorded_at_utc <- as.POSIXct(inspections$recorded_at_utc, format = "%Y-%m-%dT%H:%M:%OS", tz = "UTC")
cat("Inspections:", nrow(inspections), "\n")
print(table(inspections$inspection_status))
# Faults are included as fault_1_category/type/remarks, fault_2_..., etc.
View(inspections)
