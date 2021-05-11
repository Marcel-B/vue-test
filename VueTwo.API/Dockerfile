FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["VueTwo.API/VueTwo.API.csproj", "VueTwo.API/"]
RUN dotnet restore "VueTwo.API/VueTwo.API.csproj"
COPY . .
WORKDIR "/src/VueTwo.API"
RUN dotnet build "VueTwo.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "VueTwo.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "VueTwo.API.dll"]
