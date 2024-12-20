# Use the official image as a base image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base


# Set the working directory in the container
WORKDIR /app

# Expose the port the app will run on (replace with the port your app uses)
EXPOSE 8080

# Use the SDK image for building the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Set the working directory for building
WORKDIR /src

# Copy the CSPROJ file and restore the dependencies
COPY server.csproj ./



RUN dotnet restore "server.csproj"

# Copy the rest of the source code
COPY . ./

# Build the app
# WORKDIR "/src/server"
RUN dotnet build "server.csproj" -c Release -o /app/build

# Publish the app
RUN dotnet publish "server.csproj" -c Release -o /app/publish

# Copy the published app from the build stage to the base image
FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .


# Set the entry point to run the application
ENTRYPOINT ["dotnet", "server.dll"]
