﻿using System;
using System.Data.Common;
using System.Threading.Tasks;
using CustomersAPI.Service.Services.DatabaseServices.Exceptions;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

public class ExceptionHandlingMiddleware
{
    private readonly RequestDelegate next;

    public ExceptionHandlingMiddleware(RequestDelegate next)
    {
        this.next = next;
    }

    public async Task Invoke(HttpContext context)
    {
        try
        {
            await next(context);
        }
        // Catches all KeyNotFoundException type of errors and returns them as 404 NotFound response.
        catch (KeyNotFoundException ex)
        {
            // Set the HTTP response status code to 404 Not Found
            context.Response.StatusCode = 404;

            // Write the exception message as the response content
            await context.Response.WriteAsync(ex.Message);
        }
        catch (DatabaseOperationException dbException)
        {
            // Handle the custom exception, log it, and possibly return a custom response.
            context.Response.StatusCode = StatusCodes.Status500InternalServerError;
            await context.Response.WriteAsync($"Database Error: {dbException.Message}");
        }
        catch (DuplicateEmailException dbException)
        {
            context.Response.StatusCode = 400;
            await context.Response.WriteAsync(dbException.Message);
        }
        catch (UnauthorizedAccessException ex)
        {
            context.Response.StatusCode = 400;
            await context.Response.WriteAsync(ex.Message);
        }

        // Catches all other type of errors and returns them as 500 InternalServerError response.
        catch (Exception ex)
        {
            // Set the HTTP response status code to 404 Not Found
            context.Response.StatusCode = 404;
            Console.WriteLine("exception:", ex.Message);
            // Write the exception message as the response content
            await context.Response.WriteAsync(ex.Message);
        }
    }
}