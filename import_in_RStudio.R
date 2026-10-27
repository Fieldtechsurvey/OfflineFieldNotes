# Export a CSV from the phone and copy/share it to your computer.
# Choose the transferred file in the file picker.
path <- file.choose()
data <- read.csv(path, stringsAsFactors = FALSE, fileEncoding = "UTF-8-BOM")
data$created <- as.POSIXct(data$created, format = "%Y-%m-%dT%H:%M:%OS", tz = "UTC")
print(head(data))
print(summary(data$measurement))
# Optional: save a local R copy
saveRDS(data, "field_records.rds")
